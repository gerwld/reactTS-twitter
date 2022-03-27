import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchTweet } from "../../../../redux/actions/tweet";
import { selectTweetData, selectTweetErrorStatus, selectTweetLoadingStatus } from "../../../../redux/selectors";
import Loader from "../../Loader/Loader";
import Tweet from "../../Tweet/Tweet";

const TweetPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const data = useSelector(selectTweetData);
  const isShowTweet = !useSelector(selectTweetLoadingStatus) && data && data[0];
  const isError = useSelector(selectTweetErrorStatus) || data?.length === 0;


  useEffect(() => {
    dispatch(fetchTweet(id));
  }, [id]);

  return (
    <div>
      {isShowTweet ? (
        <div>
          <Tweet user={data[0].user} _id={data[0]._id} text={data[0].text} />
          <span>Comments, etc</span>
        </div>
      ) : (
        isError ? "Error" : <Loader />
      )}
    </div>
  );
};

export default TweetPage;
