import React from 'react';
import MyCustomAppBar from '../../appbar/MyCustomAppBar';

Header.propTypes = {
  
};

function Header(props) {
  return (
    <div>
      <MyCustomAppBar style={{ background: '#2E3B55' }}/>
    </div>
  );
}

export default Header;