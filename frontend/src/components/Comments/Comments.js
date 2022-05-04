import React from "react";

import Comment from "./Comment/Comment";
import Aux from "../../hoc/ReactAux/ReactAux";

const comments = props => {
    return props.commentsList.map(comment => (
        <Aux key={comment.published_on}>
            <Comment
                name={comment.name}
                website={comment.website}
                body={comment.body}
                publishedOn={comment.published_on}
            />
        </Aux>
    ));
};

export default comments;
