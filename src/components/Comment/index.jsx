import React from 'react';
import uuid from 'uuid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addComment, removeComment } from '../../actions';
import deleteImg from './images/delete-comment.png';
import './Comment.css';

const Comment = props => {
  let text;
  return (
    <div className="comment-area">
      <div className="register-area">
        <textarea ref={ref => (text = ref)} className="input-field"></textarea>
        <button type="button" className="register-btn" onClick={() => {
          if (text.value.trim() === '') return;
          props.addComment(props.videoId, text.value);
          text.value = '';
          text.focus();
        }}>
          등록
        </button>
      </div>
      <ul className="comment-list">
        {
          props.data[props.videoId]
          && props.data[props.videoId].comment
          && props.data[props.videoId].comment.map(item => <li key={uuid.v4()}><div className="comment-inner">{item.comment.split('\n').map(line => {return (<p key={uuid.v4()}>{line}</p>)})}<button type="button" className="delete-btn" onClick={() => props.removeComment(props.videoId, item.id)}><img src={deleteImg} alt="삭제하기" /></button></div></li>)
        }
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    data: state.vidoes.data
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addComment,
    removeComment
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);