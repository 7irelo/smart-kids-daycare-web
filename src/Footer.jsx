function Footer() {

    const styles = {
        backgroundColor: "black",
        color: "#fff",
        padding: "20px",
        textAlign: "center"
    }

    return(
        <footer style={styles}>
            <p>&copy; {new Date().getFullYear()} Smart Kids Daycare</p>
        </footer>
    );
}

export default Footer