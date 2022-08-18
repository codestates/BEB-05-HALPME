import { useHistory, useParams } from "react-router-dom";

function PostCreate() {
    let { id } = useParams()

    return (
      <div className="PostCreate">
        PostDetail
        <div>{id}번 게시글 상세 페이지</div>
      </div>
    );
}

export default PostCreate;