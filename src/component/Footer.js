function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="has-background-grey-lighter py-4 mt-auto">
      <div className="container is-max-desktop">
        <p>Copyright @ {currentYear} MisaoDev</p>
      </div>
    </footer>
  );
}

export default Footer;