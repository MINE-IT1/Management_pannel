import React, { useState } from "react";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import { BiReply } from "react-icons/bi";
import dummyProfilePic from "./assets/jiffy-logo.svg"; // Replace with actual image path
import dummyPostPic from "./assets/jiffy-logo.svg";

const SocialMediaCard = () => {
  // Dummy data
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [replyInput, setReplyInput] = useState({});
  const [showReply, setShowReply] = useState({});
  const [showCommentBox, setShowCommentBox] = useState(false);

  // Handle Like functionality
  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  // Handle Add Comment functionality
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInput.trim()) {
      setComments([...comments, { text: commentInput, replies: [] }]);
      setCommentInput("");
      setShowCommentBox(false); // Close comment box after submission
    }
  };

  // Toggle reply input visibility
  const handleReplyClick = (index) => {
    setShowReply((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Handle Add Reply functionality
  const handleReplySubmit = (e, index) => {
    e.preventDefault();
    if (replyInput[index]?.trim()) {
      const updatedComments = [...comments];
      updatedComments[index].replies.push(replyInput[index]);
      setComments(updatedComments);
      setReplyInput((prev) => ({ ...prev, [index]: "" }));
      setShowReply((prev) => ({ ...prev, [index]: false })); // Close reply input after submission
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-5 my-5">
      {/* Profile Section */}
      <div className="flex items-center mb-4">
        <img
          src={dummyProfilePic}
          alt="Profile"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h2 className="font-semibold text-lg">John Doe</h2>
          <p className="text-sm text-gray-500">New York, USA</p>
        </div>
      </div>

      {/* User Post Section (handle text or image posts) */}
      <div className="mb-4">
        <p className="text-gray-800 mb-2">
          This is a sample post by the user. It's fully dynamic and responsive.
        </p>
        {/* Check if there is an image to display */}
        <img src={dummyPostPic} alt="User Post" className="w-full rounded-lg" />
      </div>

      {/* Like and Comment Section with Icons */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={handleLike}
          className="flex items-center text-blue-600 font-semibold hover:underline"
        >
          <AiFillLike className="mr-1" /> {likeCount}
        </button>
        <button
          onClick={() => setShowCommentBox(!showCommentBox)}
          className="flex items-center text-gray-600 hover:underline"
        >
          <AiOutlineComment className="mr-1" /> {comments.length}
        </button>
      </div>

      {/* Comment Input Section (visible only when the comment icon is clicked) */}
      {showCommentBox && (
        <form onSubmit={handleCommentSubmit} className="mb-4">
          <input
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2 border rounded-md"
          />
          <button
            type="submit"
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      )}

      {/* Comments and Reply Section */}
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index}>
            <div className="flex items-start space-x-3 mb-2">
              <img
                src={dummyProfilePic}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1 bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-semibold">User {index + 1}</p>
                <p className="text-sm text-gray-800">{comment.text}</p>
              </div>
            </div>

            {/* Reply Button */}
            <button
              onClick={() => handleReplyClick(index)}
              className="flex items-center text-sm text-blue-600 hover:underline ml-12"
            >
              <BiReply className="mr-1" /> Reply
            </button>

            {/* Display replies */}
            <div className="ml-12 space-y-2">
              {comment.replies.map((reply, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <img
                    src={dummyProfilePic}
                    alt="Profile"
                    className="w-6 h-6 rounded-full"
                  />
                  <div className="flex-1 bg-gray-200 p-2 rounded-lg">
                    <p className="text-sm text-gray-700">{reply}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reply Input */}
            {showReply[index] && (
              <form
                onSubmit={(e) => handleReplySubmit(e, index)}
                className="ml-12 mt-2"
              >
                <input
                  type="text"
                  value={replyInput[index] || ""}
                  onChange={(e) =>
                    setReplyInput({ ...replyInput, [index]: e.target.value })
                  }
                  placeholder="Write a reply..."
                  className="w-full p-2 border rounded-md"
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-gray-500 text-white py-1 rounded-md"
                >
                  Reply
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
      
export default SocialMediaCard;
   