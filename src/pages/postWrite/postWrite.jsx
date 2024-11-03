import * as S from './postWrite.style';
import { BsPencil } from 'react-icons/bs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePost } from '../../context/PostContext';

const postWrite = () => {
  const navigate = useNavigate();

  const { addPost } = usePost();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleUpload = () => {
    if (title && content) {
      addPost({ title, content, authorName: '유니', time: '방금 전' });
      navigate('/community');
    }
  };

  return (
    <S.WriteContainer>
      <input
        type="text"
        id="title"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        id="content"
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <S.UploadButton>
        <button onClick={handleUpload}>
          <BsPencil />
          업로드
        </button>
      </S.UploadButton>
    </S.WriteContainer>
  );
};

export default postWrite;
