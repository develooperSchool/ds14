import React, { useEffect, useState } from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../../Payroll/Images/logo.png";
import { Button, Form, Modal } from "react-bootstrap";

const PdfDocument: React.FC<{ employeeName: string, location: string, joiningDate: string, designation: string, department: string, reportingTo: string, basic: string, specialAllowance: string, professionTax: string, hra: string }> = ({
    employeeName, location, joiningDate, designation, department, reportingTo, basic, specialAllowance, professionTax, hra
}) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Image style={styles.logo} src={logo} />
                <View style={styles.companyInfo}>
                    <Text style={styles.companyName}>CI SOLUTIONS</Text>
                    <Text style={styles.companyAddress}>Plot no-97, Sector-05, Ghansoli, Navi Mumbai 400701</Text>
                    <Text style={styles.contact}> 9967120080</Text>
                    <Text style={styles.email}>https://careerinfotechsolution.in/</Text>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text>
                <Text style={styles.body}>
                    <Text>
                        <Text style={styles.highlight}>{employeeName},</Text>
                        {"\n"}
                        <Text style={styles.highlight}>{location}</Text>
                        {"\n"}
                        <Text style={styles.highlight}>Sub: Offer Letter for the position of {designation}.</Text>
                        {"\n\n"}
                        Dear <Text style={styles.highlight}>{employeeName},</Text> you are offered the position of <Text style={styles.highlight}>{designation}</Text>. You will be initially posted at our <Text style={styles.highlight}>Ghansoli Office.</Text> You will be paid emoluments as per the enclosed annexure which will be subject to applicable tax.
                        {"\n\n"}
                        You will be required to join the office on <Text style={styles.highlight}>{joiningDate}</Text>. Kindly sign a copy of this letter as a token of your acceptance of the offer and return the same to our records. Kindly also convey the exact date of your joining the company.
                        {"\n\n"}
                        You are also requested to bring the below mentioned, at the time of joining, this would facilitate the smooth completion of the joining formalities.
                        {"\n"}
                        1. Your duly accepted resignation letter/relieving letter from the previous employment
                        {"\n"}
                        2. Previous experience certificates.
                        {"\n"}
                        3. Copies of certificates/ diplomas / degrees of educational qualifications. (Std. X, Std. XII, Graduation and post-graduation).
                        {"\n"}
                        4. Last 3 months’ pay slip
                        {"\n"}
                        5. Proof of date of birth.
                        {"\n"}
                        6. Proof of current address
                        {"\n"}
                        7. PAN Card (3 copies)
                        {"\n"}
                        8. Aadhar Card (3 copies)
                        {"\n"}
                        9. Copy of latest valid passport
                        {"\n"}
                        10. Latest Passport size photograph (3 copies)
                        {"\n"}
                        11. Banking details for online salary deposit (bank name, branch name, account no., IFSC code of the branch)
                        {"\n\n"}
                        This offer is subject to your being declared and remaining medically fit by a Medical Officer or by a doctor specified by the Company. The Management has the right to get you medically examined by any qualified medical practitioner during the period of your service. In case you are found medically unfit to continue with the job, you will lose your lien on the job. Please note that, the company has a Background verification process for all new incumbents. Any adverse report shall be dealt with as per company rules.
                        {"\n\n"}
                        <Text style={styles.highlight}>Probation:</Text> During probation either party has to give a notice of 15 working days’ post-confirmation 30 working days’ notice period.
                        {"\n\n"}
                        We look forward to your joining our organization and contributing towards a mutual and beneficial association.
                    </Text>
                </Text>
            </View>

            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>Name</Text>
                    </View>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>Designation</Text>
                    </View>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>Department</Text>
                    </View>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>Reporting To</Text>
                    </View>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>Job Location</Text>
                    </View>

                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{employeeName}</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{designation}</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{department}</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{reportingTo}</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{location}</Text>
                    </View>

                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>Earnings</Text>
                    </View>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>Monthly</Text>
                    </View>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>Yearly</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Basic Salary</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{basic}</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{parseFloat(basic) * 12}</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>HRA</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{hra}</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{parseFloat(hra) * 12}</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Special Allowance</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{specialAllowance}</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{parseFloat(specialAllowance) * 12}</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>Total(A)</Text>
                    </View>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>{(parseFloat(basic) + parseFloat(hra) + parseFloat(specialAllowance))}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>{(parseFloat(basic) + parseFloat(hra) + parseFloat(specialAllowance)) * 12}</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Professional Tax</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{professionTax}</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{parseFloat(professionTax) * 12}</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>Total Deductions</Text>
                    </View>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>{professionTax}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>{parseFloat(professionTax) * 12}</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>Net Salary Per Month</Text>
                    </View>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>{(parseFloat(basic) + parseFloat(hra) + parseFloat(specialAllowance) - parseFloat(professionTax))}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>{(parseFloat(basic) + parseFloat(hra) + parseFloat(specialAllowance) - parseFloat(professionTax)) * 12}</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>Total CTC</Text>
                    </View>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>{(parseFloat(basic) + parseFloat(hra) + parseFloat(specialAllowance) + parseFloat(professionTax))}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.header1]}>
                        <Text style={styles.tableCell}>{(parseFloat(basic) + parseFloat(hra) + parseFloat(specialAllowance) + parseFloat(professionTax)) * 12}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 60 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12 }}>Authorized Signatory</Text>
                    <Text style={{ fontSize: 12 }}>Madhu Chandrashekhar, Manager (HR)</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 12 }}>Agreed and Accepted</Text>
                    <Text style={{ fontSize: 12 }}>Ashitosh Shelar</Text>
                </View>
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
        marginBottom: 10,
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
        fontSize: 10,
    },
    email: {
        fontSize: 10
    },
    content: {
        marginTop: 10,
    },
    date: {
        textAlign: "right",
        marginBottom: 10,
        fontSize: 12,
    },
    body: {
        fontSize: 10,
        lineHeight: 1.5,
        textAlign: "justify",
    },
    highlight: {
        fontFamily: "Helvetica-Bold",
    },
    table: {
        display: "flex",
        width: "100%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 10,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableCol: {
        flex: 1,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
        padding: 8,
    },
    tableCell: {
        fontSize: 10,
    },
    header1: {
        backgroundColor: "#E4A11B",
        fontWeight: "bold",
    },

});

const OfferLetter: React.FC = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [employeeName, setEmployeeName] = useState("");
    const [location, setLocation] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const [designation, setDesignation] = useState("");
    const [department, setDepartment] = useState("");
    const [reportingTo, setReportingTo] = useState("");
    const [basic, setBasic] = useState("");
    const [specialAllowance, setSpecialAllowance] = useState("");
    const [professionTax, setProfessionTax] = useState("");
    const [hra, setHRA] = useState("");
    const [validated, setValidated] = useState(false);


    const handleModalShow1 = () => setShowModal1(true);
    const handleModalClose1 = () => setShowModal1(false);

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const namePattern1 = /^[A-Za-z\s]+$/;
        const datePattern1 = /^\d{4}-\d{2}-\d{2}$/;

        if ((!namePattern1.test(employeeName)) || (!namePattern1.test(location)) || (!datePattern1.test(joiningDate)) || (!namePattern1.test(designation)) || (!namePattern1.test(department)) || (!namePattern1.test(reportingTo)) || !basic || !specialAllowance || !professionTax || !hra) {
            setValidated(true);
            return;
        }

        setShowModal1(false);
    };

    useEffect(() => {
        handleModalShow1();
    }, []);

    useEffect(() => {
        const calculatedHRA = basic ? (parseFloat(basic) * 0.5).toFixed(0) : "";
        setHRA(calculatedHRA);
    }, [basic]);

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
                                    <b><i className="fa-solid fa-tty"></i> 9967120080</b>
                                </p>
                                <p>
                                    <b><i className="fa-solid fa-earth-americas"></i> https://careerinfotechsolution.in/</b>
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
                                    <b>Sub: Offer Letter for the position of {designation}.</b>
                                </p>
                                <p className="mt-5">
                                    <b>Dear {employeeName},</b> you are offered the position of <b>{designation}</b>. You will be initially posted at our <b>Ghansoli office</b>. You will be paid emoluments as per the enclosed annexure which will be subject to applicable tax.
                                </p>
                                <p>
                                    You are required to join the office on <b>{joiningDate}</b>. Kindly sign a copy of this letter as a token of your acceptance of the offer and return the same to our records. Kindly also convey the exact date of your joining the company.
                                </p>
                                <p className="mt-5">
                                    You are also requested to bring the below-mentioned documents at the time of joining, which would facilitate the smooth completion of the joining formalities:
                                </p>
                                <ol>
                                    <li>1. Your duly accepted resignation letter/relieving letter from the previous employment</li>
                                    <li>2. Previous experience certificates</li>
                                    <li>3. Copies of certificates/diplomas/degrees of educational qualifications (Std. X, Std. XII, Graduation, and post-graduation)</li>
                                    <li>4. Last 3 months’ pay slip</li>
                                    <li>5. Proof of date of birth</li>
                                    <li>6. Proof of current address</li>
                                    <li>7. PAN Card (3 copies)</li>
                                    <li>8. Aadhar Card (3 copies)</li>
                                    <li>9. Copy of the latest valid passport</li>
                                    <li>10. Latest Passport size photograph (3 copies)</li>
                                    <li>11. Banking details for online salary deposit (bank name, branch name, account no., IFSC code of the branch)</li>
                                </ol>
                                <p className="mt-5">
                                    This offer is subject to your being declared and remaining medically fit by a Medical Officer or by a doctor specified by the Company. The Management has the right to get you medically examined by any qualified medical practitioner during the period of your service. In case you are found medically unfit to continue with the job, you will lose your lien on the job. Please note that the company has a Background verification process for all new incumbents. Any adverse report shall be dealt with as per company rules.
                                </p>
                                <p>
                                    <b>Probation</b>: During probation either party has to give a notice of 15 working days post-confirmation 30 working days’ notice period.
                                </p>
                                <p className="mt-5">
                                    We look forward to your joining our organization and contributing towards a mutual and beneficial association.
                                </p>
                            </div>

                            <div className="container">
                                <div className="table-responsive-sm">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr className="text-center table-warning">
                                                <td colSpan={3}><b>Annexure-CTC Break Up</b></td>

                                            </tr>
                                        </thead>
                                        <tbody className="table">
                                            <tr>
                                                <td scope="row">Name</td>
                                                <td colSpan={3}>{employeeName}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Designation</td>
                                                <td colSpan={3}>{designation}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Department</td>
                                                <td colSpan={3}>{department}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Reporting To</td>
                                                <td colSpan={3}>{reportingTo}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Job Location</td>
                                                <td colSpan={3}>{location}</td>
                                            </tr>
                                            <tr></tr>
                                            <tr className="table-warning fw-bold">
                                                <td scope="row" >Compensation Details</td>
                                                <td colSpan={3}>In INR</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Earnings</td>
                                                <td>Monthly</td>
                                                <td>Yearly</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Basic</td>
                                                <td>{basic}</td>
                                                <td>{parseFloat(basic) * 12}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">HRA(50% of Basic)</td>
                                                <td>{hra}</td>
                                                <td>{parseFloat(hra) * 12}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Special Allowance</td>
                                                <td>{specialAllowance}</td>
                                                <td>{parseFloat(specialAllowance) * 12}</td>
                                            </tr>
                                            <tr className="table-warning fw-bold">
                                                <td scope="row">Total (A)</td>
                                                <td>{parseFloat(basic) + parseFloat(hra) + parseFloat(specialAllowance)}</td>
                                                <td>{(parseFloat(basic) + parseFloat(hra) + parseFloat(specialAllowance)) * 12}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Deductions</td>
                                                <td colSpan={3}></td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Professional Tax</td>
                                                <td>{professionTax}</td>
                                                <td>{parseFloat(professionTax) * 12}</td>
                                            </tr>
                                            <tr className="table-warning fw-bold">
                                                <td scope="row">Total Deductions</td>
                                                <td>{professionTax}</td>
                                                <td>{parseFloat(professionTax) * 12}</td>
                                            </tr>
                                            <tr className="table-warning">
                                                <td scope="row">Net Salary Per Month</td>
                                                <td>{parseFloat(basic) + parseFloat(hra) + parseFloat(specialAllowance) - parseFloat(professionTax)}</td>
                                                <td>{(parseFloat(basic) + parseFloat(hra) + parseFloat(specialAllowance) - parseFloat(professionTax)) * 12}</td>
                                            </tr>

                                        </tbody>
                                        <tfoot>
                                            <tr className="table-warning fw-bold">
                                                <td scope="row">Total CTC</td>
                                                <td>{parseFloat(basic) + parseFloat(hra) + parseFloat(specialAllowance) + parseFloat(professionTax)}</td>
                                                <td>{(parseFloat(basic) + parseFloat(hra) + parseFloat(specialAllowance) + parseFloat(professionTax)) * 12}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>

                            <div className="container d-flex justify-content-between mt-5 ">
                                <div><p>Authorized Signatory</p>
                                    <p>Madhu Chandrashekhar Manager (HR)</p>
                                </div>
                                <div>
                                    <p>Agree and Accepted</p>
                                    <p>Ashitosh Shelar</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <div className="container">
                <PDFDownloadLink document={<PdfDocument employeeName={employeeName} location={location} joiningDate={joiningDate} designation={designation} department={department} reportingTo={reportingTo} basic={basic} specialAllowance={specialAllowance} professionTax={professionTax} hra={hra} />} fileName="offer_letter.pdf">
                    {({ blob, url, loading, error }) => (loading ? "Loading document..." : "Download Offer Letter")}
                </PDFDownloadLink>
            </div>

            <Modal show={showModal1} onHide={handleModalClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Employee Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
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
                        <Form.Group controlId="joiningDate">
                            <Form.Label>Joining Date:</Form.Label>
                            <Form.Control type="text" value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)} required pattern="\d{4}-\d{2}-\d{2}" />
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

                        <h5>Annexure-CTC Break Up</h5>
                        <Form.Group controlId="department">
                            <Form.Label>Department:</Form.Label>
                            <Form.Control type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required pattern="[A-Za-z\s]+" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid department (letters and spaces only)
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="reportingTo">
                            <Form.Label>Reporting To:</Form.Label>
                            <Form.Control type="text" value={reportingTo} onChange={(e) => setReportingTo(e.target.value)} required pattern="[A-Za-z\s]+" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid name (letters and spaces only)
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="basic">
                            <Form.Label>Basic:</Form.Label>
                            <Form.Control type="number" value={basic} onChange={(e) => setBasic(e.target.value)} placeholder="Enter Basic" required />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid number for Basic
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="hra">
                            <Form.Label>HRA (50% of Basic):</Form.Label>
                            <Form.Control type="text" value={hra} readOnly />
                        </Form.Group>
                        <Form.Group controlId="specialAllowance">
                            <Form.Label>Special Allowance:</Form.Label>
                            <Form.Control type="number" value={specialAllowance} onChange={(e) => setSpecialAllowance(e.target.value)} placeholder="Enter Special Allowance" required />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid number for Special Allowance
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="professionalTax">
                            <Form.Label>Professional Tax:</Form.Label>
                            <Form.Control type="number" value={professionTax} onChange={(e) => setProfessionTax(e.target.value)} placeholder="Enter Professional Tax" required />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid number for Professional Tax
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose1}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleFormSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};

export default OfferLetter;
