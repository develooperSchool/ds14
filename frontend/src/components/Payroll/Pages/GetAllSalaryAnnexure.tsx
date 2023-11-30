import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../../Redux/store";
import * as SalaryAnnexureReducer from "../../../Redux/PayrollRedux/salaryReducer";
import * as SalaryAnnexureAction from "../../../Redux/PayrollRedux/salaryAction";
import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { SalaryAnnexure } from "../Model/SalaryAnnexure";
import { PDFDownloadLink } from "@react-pdf/renderer";
import companyLogo from "../Images/logo.png";
import { usePagination } from "../../Pagination";
import { Pagination } from "react-bootstrap";

const GetAllSalaryAnnexure: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  // Data from Redux Store
  const salaryAnnexureReduxState: SalaryAnnexureReducer.InitialState =
    useSelector((state: RootState) => {
      return state[SalaryAnnexureReducer.salaryfeatureKey];
    });

  const {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  } = usePagination({
    perPageRecords: 5,
    totalPageRecords: salaryAnnexureReduxState.salaries.length,
  });

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  const fetchDataFromServer = () => {
    dispatch(SalaryAnnexureAction.getAllSalaryAnnexureAction());
  };

  const deleteSalaryAnnexure = (annexureId: number) => {
    if (annexureId) {
      dispatch(
        SalaryAnnexureAction.deleteSalaryAnnexureAction({ Id: annexureId })
      ).then((res: any) => {
        if (res && !res.error) {
          fetchDataFromServer();
        }
      });
    }
  };

  const generatePDF = (annexure: SalaryAnnexure) => (
    <Document>
      <Page size="A3" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} src={companyLogo} />
            <View style={styles.companyInfo}>
              <Text style={styles.companyName}>CI SOLUTIONS</Text>
              <Text style={styles.companyAddress}>
                Plot no-97, Sector-05, Ghansoli, Navi Mumbai 400701
              </Text>
            </View>
          </View>

          <Text style={styles.title}>
            Pay slip for the month of September-2023
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.twoColumnsContainer}>
            <View style={styles.column}>
              <View style={styles.row}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>{annexure.name}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Designation</Text>
                <Text style={styles.value}>{annexure.designation}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Department</Text>
                <Text style={styles.value}>{annexure.department}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Job Location</Text>
                <Text style={styles.value}>{annexure.job_location}</Text>
              </View>
            </View>
            <View style={styles.separator} />

            <View style={styles.column}>
              <View style={styles.row}>
                <Text style={styles.label}>User ID</Text>
                <Text style={styles.value}>{annexure.user_id}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Bank Name</Text>
                <Text style={styles.value}>Bank Of India</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Bank Account Number</Text>
                <Text style={styles.value}>123456789</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>PAN No</Text>
                <Text style={styles.value}>DEHVXXXXXN</Text>
              </View>
            </View>
          </View>

          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.label}>Compensation Details (In INR)</Text>
            </View>
            <View style={styles.subTable}>
              <View style={styles.subRowHeader}>
                <Text style={styles.subHeaderCell}>Earnings</Text>
                <Text style={styles.subHeaderCell}>Monthly</Text>
                <Text style={styles.subHeaderCell}>Yearly</Text>
              </View>
              <View style={styles.subRow}>
                <Text style={styles.subCell}>Basic</Text>
                <Text style={styles.subCell}>{annexure.basic}</Text>
                <Text style={styles.subCell}>{annexure.basic * 12}</Text>
              </View>
              <View style={styles.subRow}>
                <Text style={styles.subCell}>HRS (50% of Basic)</Text>
                <Text style={styles.subCell}>{annexure.hra}</Text>
                <Text style={styles.subCell}>{annexure.hra * 12}</Text>
              </View>
              <View style={styles.subRow}>
                <Text style={styles.subCell}>Special Allowance</Text>
                <Text style={styles.subCell}>{annexure.special_allowance}</Text>
                <Text style={styles.subCell}>
                  {annexure.special_allowance * 12}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.label}>Deductions</Text>
            </View>
            <View style={styles.subTable}>
              <View style={styles.subRowHeader}>
                <Text style={styles.subHeaderCell}>Deductions</Text>
                <Text style={styles.subHeaderCell}>Monthly</Text>
                <Text style={styles.subHeaderCell}>Yearly</Text>
              </View>
              <View style={styles.subRow}>
                <Text style={styles.subCell}>Profession Tax</Text>
                <Text style={styles.subCell}>{annexure.profession_tax}</Text>
                <Text style={styles.subCell}>
                  {annexure.profession_tax * 12}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.label}>Total Deductions</Text>
              <Text style={styles.value}>{annexure.total_deductions}</Text>
              <Text style={styles.value}>{annexure.total_deductions * 12}</Text>
            </View>
          </View>

          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.label}>Net Salary Per Month</Text>
              <Text style={styles.value}>{annexure.net_salary}</Text>
              <Text style={styles.value}>{annexure.net_salary * 12}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );

  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
      padding: 15,
    },
    header: {
      textAlign: "center",
      marginBottom: 10,
      borderBottom: 1,
    },
    logoContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
      margin: 0,
    },
    logo: {
      width: 170,
      height: 120,
    },
    companyInfo: {
      marginRight: 100,
    },
    companyName: {
      fontSize: 20,
      fontWeight: "bold",
      textDecoration: "underline",
      textAlign: "center",
    },
    companyAddress: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 12,
    },
    title: {
      fontSize: 12,
      fontWeight: "bold",
      marginBottom: 5,
    },
    content: {
      margin: 10,
    },
    table: {
      marginBottom: 10,
      display: "flex",
      flexDirection: "column",
      border: "1px solid #000",
      width: "100%",
      fontSize: 12,
    },
    subTable: {
      marginLeft: 0,
      display: "flex",
      flexDirection: "column",
      width: "100%",
      fontSize: 12,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottom: "1px solid #000",
      padding: "5px 0",
    },
    subRow: {
      flexDirection: "row",
      borderBottom: "1px solid #000",
      padding: 5,
    },
    rowHeader: {
      flexDirection: "row",
      backgroundColor: "#c0c0c0",
      padding: 5,
    },
    subRowHeader: {
      flexDirection: "row",
      backgroundColor: "#c0c0c0",
      padding: 5,
    },
    label: {
      flex: 1,
      fontWeight: "bold",
      padding: 5,
    },
    value: {
      flex: 1,
      padding: 5,
    },
    subHeaderCell: {
      width: "33%",
      fontWeight: "bold",
      padding: 5,
    },
    subCell: {
      width: "33%",
      padding: 5,
    },
    twoColumnsContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
      fontSize: 12,
    },
    column: {
      flex: 1,
      padding: 5,
    },
    separator: {
      width: 2,
      backgroundColor: "#000",
      marginVertical: 5,
    },
  });

  const DownloadLink = ({ annexure }: { annexure: SalaryAnnexure }) => {
    const pdfContent = generatePDF(annexure);

    return (
      <PDFDownloadLink
        document={pdfContent}
        fileName={`salary_annexure_${annexure.annexure_id}.pdf`}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download"
        }
      </PDFDownloadLink>
    );
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col">
            <h3 className="text-success mt-3">Salary Annexure Details</h3>
            <p className="fst-italic text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
              ipsum? Asperiores totam tenetur minus officia sint perferendis
              quidem accusamus, iusto reiciendis a quos laudantium. Repellat
              eius porro qui amet voluptates odit. Consequatur, aliquam
              similique libero dolor dolorem totam eligendi! Quod dignissimos
              commodi blanditiis deleniti, magnam hic placeat ut illum.
              Expedita.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <Link className="btn btn-primary" to="/create">
          + NEW
        </Link>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-secondary table-stripped table-hover text-center">
              <thead>
                <tr>
                  <th>Annexure Id</th>
                  <th>User Id</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Department</th>
                  <th>location</th>
                  <th>Basic Salary</th>
                  <th>HRA</th>
                  <th>Allowance</th>
                  <th>P.Tax</th>
                  <th>Total Deduction</th>
                  <th>Net Salary</th>
                  <th>Annexure Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {salaryAnnexureReduxState.salaries
                  .slice(startPageIndex, endPageIndex + 1)
                  .map((annexure, index) => (
                    <tr key={index}>
                      <td>{annexure.annexure_id}</td>
                      <td>{annexure.user_id}</td>
                      <td>{annexure.name}</td>
                      <td>{annexure.designation}</td>
                      <td>{annexure.department}</td>
                      <td>{annexure.job_location}</td>
                      <td>{annexure.basic}</td>
                      <td>{annexure.hra}</td>
                      <td>{annexure.special_allowance}</td>
                      <td>{annexure.profession_tax}</td>
                      <td>{annexure.total_deductions}</td>
                      <td>{annexure.net_salary}</td>
                      <td>{annexure.annexure_date}</td>
                      <td>
                        <Link
                          to={`/put/${annexure.annexure_id}`}
                          className="btn btn-success"
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            deleteSalaryAnnexure(annexure.annexure_id)
                          }
                        >
                          Delete
                        </button>
                        <button className="btn btn-warning">
                          <DownloadLink annexure={annexure} />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <Pagination>
              <Pagination.First onClick={() => displayPage(1)} />
              <Pagination.Prev
                onClick={() => displayPage(currentPageIndex - 1)}
                disabled={currentPageIndex === 1}
              />
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPageIndex}
                  onClick={() => displayPage(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => displayPage(currentPageIndex + 1)}
                disabled={currentPageIndex === totalPages}
              />
              <Pagination.Last onClick={() => displayPage(totalPages)} />
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetAllSalaryAnnexure;
