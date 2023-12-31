import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../css/PostDetail.css"; // Import custom CSS for styling

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${id}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      } else {
        console.error("게시물 데이터 가져오기 실패:", response.status);
      }
    } catch (error) {
      console.error("에러:", error);
    }
  };

  const handleDelete = async () => {
    try {
      console.log(authToken);
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });
      if (response.ok) {
        console.log("게시물 삭제 성공!");
        navigate("/board");
      } else {
        const data = await response.json();
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("게시물 삭제 에러:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("ko-KR", options);
  };

  return (
    <div>
      {Object.keys(post).length === 0 ? (
        <p>로딩 중...</p>
      ) : (
        <>
          <h2 className="post-detail-title">{post[0].title}</h2>
          <p className="post-detail-author">작성자: {post[0].author_name}</p>
          <p className="post-detail-date">
            작성일: {formatDate(post[0].created_at)}
          </p>
          <p className="post-detail-content">{post[0].content}</p>
          <Link to={`/edit/${id}`}>
            <button>게시물 수정</button>
          </Link>
          <button onClick={handleDelete}>게시물 삭제</button>
        </>
      )}
    </div>
  );
};

export default PostDetail;
