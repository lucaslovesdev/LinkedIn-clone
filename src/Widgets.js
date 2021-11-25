import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("PAPA FAM", "Top News - 1247 readers")}
      {newsArticle("Coronavirus: UK updates", "Top News - 886 readers")}
      {newsArticle("Live: Nina Silva participa de entrevista às 16:00", "Top News - 9099 readers")}
      {newsArticle("54% da população LGBTQIA+ não sente segurança no trabalho", "Top News - 2361 readers")}
      {newsArticle("Nubank compra fintech de inteligência artificial", "Top News - 1258 readers")}
      {newsArticle("Magazine Luiza entra no mercado de games", "Top News - 2154 readers")}
    </div>
  );
}

export default Widgets
