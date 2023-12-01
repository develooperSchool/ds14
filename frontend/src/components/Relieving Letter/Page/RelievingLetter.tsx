import React, { useEffect, useState } from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../../Payroll/Images/logo.png";
import { Button, Form, Modal } from "react-bootstrap";

const PdfDocument: React.FC<{ employeeName: string, location: string, resignationDate: string, employmentStartDate: string, employmentEndDate: string, designation: string }> = ({
    employeeName,
    location,
    resignationDate,
    employmentStartDate,
    employmentEndDate,
    designation,
}) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Image style={styles.logo} src={logo} />
                <View style={styles.companyInfo}>
                    <Text style={styles.companyName}>CI SOLUTIONS</Text>
                    <Text style={styles.companyAddress}>Plot no-97, Sector-05, Ghansoli, Navi Mumbai 400701</Text>
                    <Text style={styles.contact}>Contact no: 9967120080</Text>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.date}>Date : {new Date().toLocaleDateString()}</Text>
                <Text style={styles.body}>
                    <Text>
                        <Text style={styles.highlight}>{employeeName}</Text>
                        {"\n"}
                        <Text style={styles.highlight}>{location}</Text>
                        {"\n"}
                        <Text style={styles.highlight}>Sub: Relieving cum experience letter.</Text>
                        {"\n\n"}
                        Dear <Text style={styles.highlight}>{employeeName}</Text>,
                        {"\n\n"}
                        This is with reference to your resignation letter dated <Text style={styles.highlight}> {resignationDate}</Text>.
                        {"\n"}
                        Your resignation has been accepted with regret, and you are relieved from the services of CI Solution with effect from the close of business hours on <Text style={styles.highlight}> {resignationDate}</Text>.
                        {"\n\n"}
                        We confirm that you were employed with CI Solution from <Text style={styles.highlight}> {employmentStartDate}</Text> to<Text style={styles.highlight}> {employmentEndDate}</Text>.
                        {"\n"}
                        Your designation at the time of leaving was<Text style={styles.highlight}> {designation}</Text>.
                        {"\n\n"}
                        <Text style={styles.highlight}>Yours truly,</Text>
                        {"\n\n"}
                        <Text style={styles.highlight}> For CI SOLUTION</Text>
                        {"\n"}
                        <Text style={styles.highlight}> Human Resources</Text>
                    </Text>
                </Text>
            </View>
        </Page>
    </Document>
);

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: 30,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        borderBottom: 1,
    },
    logo: {
        width: 170,
        height: 100,
        marginBottom: 10
    },
    companyInfo: {
        marginLeft: 20,
    },
    companyName: {
        fontSize: 18,
        fontWeight: "bold",
        textDecoration: "underline",
    },
    companyAddress: {
        fontSize: 12,
    },
    contact: {
        fontSize: 10
    },

    content: {
        marginTop: 10,
    },
    date: {
        textAlign: "right",
        marginBottom: 10,
        fontSize: 12
    },
    body: {
        fontSize: 10,
        lineHeight: 1.5,
        textAlign: "justify",

    },
    highlight: {
        fontFamily: "Helvetica-Bold",
    }
});


const RelievingLetter: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [employeeName, setEmployeeName] = useState("");
    const [location, setLocation] = useState("");
    const [resignationDate, setResignationDate] = useState("");
    const [employmentStartDate, setEmploymentStartDate] = useState("");
    const [employmentEndDate, setEmploymentEndDate] = useState("");
    const [designation, setDesignation] = useState("");
    const [validated, setValidated] = useState(false);

    const handleModalShow = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    const handleLetterFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const namePattern = /^[A-Za-z\s]+$/;
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;

        if (
            !namePattern.test(employeeName) ||
            !namePattern.test(location) ||
            !datePattern.test(resignationDate) ||
            !datePattern.test(employmentStartDate) ||
            !datePattern.test(employmentEndDate) ||
            !namePattern.test(designation)
        ) {
            setValidated(true);
            return;
        }
        setShowModal(false);
    };

    useEffect(() => {
        handleModalShow();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="column">
                        <nav className="navbar navbar-expand navbar-light border-bottom">
                            <div className="nav navbar-nav">
                                <img src={logo} alt="" className="w-50" />
                            </div>
                            <div className="d-flex flex-column">
                                <h1>
                                    <u>CI SOLUTIONS</u>
                                </h1>
                                <p>
                                    <b>Plot no-97, Sector-05, Ghansoli, Navi Mumbai 400701</b>
                                </p>
                                <p>
                                    <b>Contact no: 9967120080</b>
                                </p>
                            </div>
                        </nav>
                        <main>
                            <div className="container">
                                <p className="text-end">Date: {new Date().toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p>
                                    <b>{employeeName}</b>
                                </p>
                                <p>
                                    <b>{location}</b>
                                </p>
                                <p>
                                    <b>Sub: Relieving cum experience letter.</b>
                                </p>
                                <p className="mt-5">
                                    <b>Dear {employeeName},</b>
                                </p>
                                <p>
                                    This is with reference to your resignation letter dated <b>{resignationDate}</b>.
                                </p>
                                <p>
                                    Your resignation has been accepted with regret, and you are relieved from the services of CI Solution with effect from the close of business hours on <b>{resignationDate}</b>.
                                </p>
                                <p className="mt-5">
                                    We confirm that you were employed with CI Solution from <b>{employmentStartDate}</b> to <b>{employmentEndDate}</b>.
                                </p>
                                <p>
                                    Your designation at the time of leaving was <b>{designation}</b>.
                                </p>
                                <p className="mt-5">
                                    <b>Yours truly,</b>
                                </p>
                                <p>
                                    <b>For CI Solution</b>
                                </p>
                                <p>
                                    <b>Human Resources</b>
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <div className="container">
                <PDFDownloadLink document={<PdfDocument employeeName={employeeName} location={location} resignationDate={resignationDate} employmentStartDate={employmentStartDate} employmentEndDate={employmentEndDate} designation={designation} />} fileName="relieving_letter.pdf">
                    {({ blob, url, loading, error }) => (loading ? "Loading document..." : "Download Relieving Letter")}
                </PDFDownloadLink>
            </div>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Employee Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleLetterFormSubmit}>
                        <Form.Group controlId="employeeName">
                            <Form.Label>Employee Name:</Form.Label>
                            <Form.Control type="text" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} required pattern="[A-Za-z\s]+" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid name (letters and spaces only)
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="location">
                            <Form.Label>Location:</Form.Label>
                            <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)} required pattern="[A-Za-z\s]+" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid location (letters and spaces only)
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="resignationDate">
                            <Form.Label>Resignation Date:</Form.Label>
                            <Form.Control type="text" value={resignationDate} onChange={(e) => setResignationDate(e.target.value)} required pattern="\d{4}-\d{2}-\d{2}" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid date (YYYY-MM-DD format)
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="employmentStartDate">
                            <Form.Label>Employment Start Date:</Form.Label>
                            <Form.Control type="text" value={employmentStartDate} onChange={(e) => setEmploymentStartDate(e.target.value)} required pattern="\d{4}-\d{2}-\d{2}" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid date (YYYY-MM-DD format)
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="employmentEndDate">
                            <Form.Label>Employment End Date:</Form.Label>
                            <Form.Control type="text" value={employmentEndDate} onChange={(e) => setEmploymentEndDate(e.target.value)} required pattern="\d{4}-\d{2}-\d{2}" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid date (YYYY-MM-DD format)
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="designation">
                            <Form.Label>Designation:</Form.Label>
                            <Form.Control type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required pattern="[A-Za-z\s]+" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid designation (letters and spaces only)
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>


            </Modal>

        </>
    );
};

export default RelievingLetter;
