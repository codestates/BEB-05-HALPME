import { useParams } from "react-router-dom";

function PostCreate() {
    let { id } = useParams()

    // 본인 게시글이면 채택 버튼 넣기
    return (
      <div className="PostCreate">
        PostDetail
        <div>{id}번 게시글 상세 페이지</div>
      </div>
    );
}

export default PostCreate;