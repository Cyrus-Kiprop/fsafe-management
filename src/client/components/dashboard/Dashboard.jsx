import React from 'react';

function Dashboard() {
  return (
    <>
      <div className="menu-icon">
        <i className="fas fa-bars header__menu" />
      </div>
      <main className="main">
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>
        <div className="main-overview">
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
        </div>
        <div className="main-cards">
          <div className="card">Card</div>
          <div className="card">Card</div>
          <div className="card">Card</div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__copyright">© 2019</div>
        <div className="footer__signature">Fika Safe</div>
      </footer>
    </>
  );
}

export default Dashboard;