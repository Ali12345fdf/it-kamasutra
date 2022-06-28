import s from "./Dialogs.module.css";
import Message from './Message/Message.jsx'
import DialogItem from './DialogItem/DialogItem.jsx'
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {

  let dialogs = [
    {id:'amirhan',name:'Amirhan'},
    {id:'alinur',name:'Alinur'},
    {id:'seytek',name:'Seytek'},
  ]

  let messages = [ 
    {id:'amirhan',message:'hi'},
    {id:'alinur',message:'Hello'},
    {id:'bekjan',message:'Mercy'},
  ]

  let dialogElements = dialogs
  .map(d => <DialogItem name={d.name} id={d.id}/>)

  let messagesElements = messages
  .map(m => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
      {dialogElements}
      </div>
      <div className={s.messages}>
      {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
