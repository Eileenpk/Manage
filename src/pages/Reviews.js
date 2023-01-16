import styles from "../styles/Reviews.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import WindowSize from "./components/utils/WindowSize";
import GetStartedButton from "./components/GetStartedButton";
export default function Reviews() {
  const { width } = WindowSize();

  const reviewArray = [
    {
      path: "/../public/images/avatar-anisha.png",
      name: "Anisha Li",
      review: `“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”`,
    },
    {
      path: "/../public/images/avatar-ali.png",
      name: "Ali Bravo",
      review: `“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”`,
    },
    {
      path: "/../public/images/avatar-richard.png",
      name: "Richard Watts",
      review: `“Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”`,
    },
    {
      path: "/../public/images/avatar-shanai.png",
      name: "Shanai Gough",
      review: `“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”`,
    },
  ];
  // state to track were we are in review array
  const [current, setCurrent] = useState(0);

  // every 6 seconds go to next item in array
  useEffect(() => {
    const next = (current + 1) % reviewArray.length;
    const id = setTimeout(() => {
      setCurrent(next);
    }, 6000);

    return () => clearTimeout(id);
  }, [current]);

  // onClick change the displayed review to the index of the clicked circle.
  const goToClickedReview = (index) => {
    setCurrent(index);
  };

  // map over the review array and return a circle div for each one targeting the current index to fill in color on current circle.
  const circleMap = reviewArray.map((circle, index) => {
    if (index === current) {
      return (
        <div
          key={circle.name}
          className={`${styles.indexIndicatorCircle} ${styles.circleFilledIn}`}
          onClick={() => goToClickedReview(index)}
        ></div>
      );
    } else {
      return (
        <div
          key={circle.name}
          className={styles.indexIndicatorCircle}
          onClick={() => goToClickedReview(index)}
        ></div>
      );
    }
  });

  const showAllReviews = reviewArray.map((review) => {
    <section key={review.name} className={styles.slide}>
      <Image
        height={72}
        width={72}
        src={review.path}
        alt={`${review.name} avatar`}
        className={styles.avatar}
      />
      <h3 className={styles.reviewersName}>{review.name}</h3>
      <p className={styles.reviewText}>{review.review}</p>
    </section>;
  });
  return (
    <section className={styles.carouselContainer}>
      <h2 className={styles.heading}>What they've said</h2>
      <div>
        <section className={styles.slide}>
          <Image
            height={72}
            width={72}
            src={reviewArray[current].path}
            alt={`${reviewArray[current].name} avatar`}
            className={styles.avatar}
          />
          <h3 className={styles.reviewersName}>{reviewArray[current].name}</h3>
          <p className={styles.reviewText}>{reviewArray[current].review}</p>
        </section>
        {width < 700 ? (
          <div className={styles.indexIndicatorCircleContainer}>
            {circleMap}
          </div>
        ) : (
          <div className={styles.btnContainer}>
            <GetStartedButton />
          </div>
        )}
      </div>
    </section>
  );
}