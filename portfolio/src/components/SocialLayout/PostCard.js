import React from 'react';
import profilPhoto from '../../assets/profilPhoto.png';

const PostCard = ({ post }) => {
  return (
    <div className="post">
      <img src={profilPhoto} alt="Author" className="post-avatar" />
      
      <div className="post-content">
        <div className="post-header">
          <span className="post-author">Djaber Semaoui</span>
          <i className="fa-solid fa-circle-check verified-badge" style={{ fontSize: '0.9rem' }}></i>
          <span className="post-handle">@djaber_semaoui</span>
          <span className="post-time">· {post.date}</span>
        </div>

        <div className="post-text">
          {post.desc}
        </div>

        <div className="post-tags">
          {post.tech.map(t => (
            <span key={t} className="post-tag">#{t}</span>
          ))}
        </div>

        {post.image && (
          <img src={post.image} alt={post.title} className="post-image" loading="lazy" />
        )}

        <div className="post-actions">
          <button className="action-btn">
            <i className="fa-regular fa-comment"></i> 12
          </button>
          <button className="action-btn">
            <i className="fa-solid fa-retweet"></i> 4
          </button>
          <button className="action-btn">
            <i className="fa-regular fa-heart"></i> 48
          </button>
          {post.link !== '#' && (
            <a href={post.link} target="_blank" rel="noreferrer" className="action-btn" style={{ textDecoration: 'none' }}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i> Visit
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
