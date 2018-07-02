import React from 'react';

const BlogPostsListItem = () => {
  return (
    <div className="blog">
      <h1>Blog Posts</h1>
      <div className="blog-post">
        <div className="container">
          <a href="" className="blog-post--title"><h2>Blog Post Title</h2></a>
          <h6 className="blog-post--category">Category: category</h6>
          <h6 className="blog-post--date">Date published</h6>
        </div>
        <div className="container">
          <hr />

          <div className="blog-post--excerpt">
            <p>
            Lorem ipsum dolor amet chillwave hella locavore vegan meditation actually lyft la croix taxidermy hot chicken craft beer art party direct trade. Jean shorts 8-bit taxidermy marfa, tattooed blue bottle thundercats distillery tumblr edison bulb. Crucifix meditation meh migas green juice stumptown flannel. Aesthetic godard taiyaki cold-pressed forage fam chicharrones palo santo tacos church-key mixtape edison bulb small batch. Knausgaard tbh craft beer austin aesthetic cray ennui snackwave mumblecore readymade food truck schlitz chicharrones.
            </p>

            <a className="text-mute text-right" href="" ><i className="fa fa-arrow-circle-right"></i> Read more...</a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default BlogPostsListItem;