import React from 'react';
import classname from 'classnames';
import PropTypes from 'prop-types';
Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  pagination: {},
}

function Pagination({ pagination, action }) {
  
  var buttons = [];
  const totalPages = Math.ceil(pagination.totalBikes/pagination._limit);
  const distance = totalPages > 8 ? 6 : 3;
  const page = pagination._page;

  var start = page > 3 ? page - 3 : 1;
  start = page + 3 > totalPages ? totalPages - distance: start;
  var end = page + 2 < totalPages ? page + 2 : totalPages;
  end = start + distance <= totalPages ? start + distance : end;

  if(start === -distance){
    start = 0;
    end = 0;
  }

  const handleAction = (newPage) => {
    if(action){
      action(newPage);
    }
  }

  for (let index = start; index <= end; index++) {
    buttons.push(<li key={index+page+start} className={classname({
      'page-item': true,
      'active': page === index,
    })}><button className="page-link" href="#" onClick= {()=> handleAction(index)}> {index}</button></li>);
  }
  if (end < totalPages) {
    buttons.push(<li key={start} className="page-item"><button className="page-link" href="#">...</button></li>)
  }
  if(start !==1 && page <= totalPages){
    if(end < totalPages) buttons.shift();
    buttons.unshift(<li key={end} className="page-item"><button className="page-link" href="#">...</button></li>)
  }
  return (

    <div className="demo">
      <nav className="pagination-outer" aria-label="Page navigation">
        <ul className="pagination">
          
            (<li className="page-item">
              <button href="#" className="page-link" disabled={page === 1} aria-label="Previous" onClick={()=>handleAction(page-1)}>
                <span aria-hidden="true">«</span>
              </button>
            </li>)
          
          {buttons}
          
            (<li className="page-item">
              <button href="#" className="page-link" disabled={page === totalPages} aria-label="Next" onClick={()=>handleAction(page+1)}>
                <span aria-hidden="true">»</span>
              </button>
            </li>)
          
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
