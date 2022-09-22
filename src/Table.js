import React from "react";

const Table = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <th>{post.id}</th>
              <th>{post.title}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
