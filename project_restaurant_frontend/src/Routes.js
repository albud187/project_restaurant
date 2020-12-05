import React from 'react';
import {Route} from 'react-router-dom';

const BaseRouter =() => (
  <div>
    <Route exact path ='/' component ={Home} />

    <Route exact path ='/create-article/' component ={TextNoteCreate} />
    <Route exact path='/meme-text-gen/' component = {MemeTextGen} />

    <Route exact path='/text_note_list' component = {TextNoteListView} />
    <Route exact path='/filter_notes' component = {FilterTextNotes} />
    <Route exact path='/create_note' component = {TextNoteCreate} />
    <Route exact path='/text_note/:textnoteID' component = {TextNoteDetailView} />

    <Route exact path='/list_note_list' component = {ListNoteListView} />
    <Route exact path='/list_note/:listnoteID' component = {ListNoteDetailView} />
    <Route exact path ='/create_list' component ={ListNoteCreate}/>

    <Route exact path='/login/' component = {Login}/>
  </div>
)
