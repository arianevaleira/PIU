import './Layout.css';

function Layout({ children, temaEscuro }){
  return (
    <div className={`container ${temaEscuro ? 'escuro' : ''}`}>
        {children}
    </div>
  );
};

export default Layout;
