import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectTweetData, selectTweetErrorStatus, selectTweetLoadingStatus } from "store/selectors";
import { fetchTweet, getTweet } from "store/actions/tweet";
import { Tweet, Loader } from "components";

const TweetPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const data = useSelector(selectTweetData);
  const isShowTweet = !useSelector(selectTweetLoadingStatus) && data && data[0];
  const isError = useSelector(selectTweetErrorStatus) || data?.length === 0;

  useEffect(() => {
    dispatch(fetchTweet(id));
    return () => {
      dispatch(getTweet(undefined));
    };
  }, [id]);

  return (
    <div>
      {isShowTweet ? (
        <div>
          <Tweet _id="123" user={data[0].user} text={data[0].text} />
          <span>Comments, etc</span>
        </div>
      ) : isError ? (
        "Error"
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TweetPage;
