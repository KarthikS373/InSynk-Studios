import React from "react";
import { createPortal } from "react-dom";

import styles from "./MovieModal.module.css";

const modal = document.querySelector("#modal");
const MovieModal = ({ movie, onClose }) => {
  const {
    original_title,
    overview,
    release_date,
    vote_average,
    vote_count,
    poster_path
  } = movie;

  const Modal = (
    <div className={styles.portal} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeBtn} onClick={onClose}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.71967 0.71967C1.01256 0.426777 1.48744 0.426777 1.78033 0.71967L7 5.93934L12.2197 0.71967C12.5126 0.426777 12.9874 0.426777 13.2803 0.71967C13.5732 1.01256 13.5732 1.48744 13.2803 1.78033L8.06066 7L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L7 8.06066L1.78033 13.2803C1.48744 13.5732 1.01256 13.5732 0.71967 13.2803C0.426777 12.9874 0.426777 12.5126 0.71967 12.2197L5.93934 7L0.71967 1.78033C0.426777 1.48744 0.426777 1.01256 0.71967 0.71967Z"
              fill="#141E35"
            />
          </svg>
        </div>
        <div className={styles.title}>{original_title}</div>
        <div className={styles.row}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
            }}
          ></div>
          <div className={styles.content}>
            <span>
              <strong>Release Date</strong>: {release_date}{" "}
            </span>
            <p>{overview}</p>
            <span>
              <strong>{vote_average}</strong> / 10 ({vote_count} total votes)
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(Modal, modal);
};

export default MovieModal;
