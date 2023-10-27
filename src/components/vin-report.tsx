"use client";
import { VinResult } from "@/types";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export const DownloadLink = ({
  otherResults,
  importantResults,
  title,
  slug,
}: {
  title: string;
  otherResults: VinResult[];
  slug: string;
  importantResults: VinResult[];
}) => {
  const VINReport = () => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{title}</Text>
            {importantResults.map((result, index) => (
              <Text key={index}>
                {result.Variable}: {result.Value}
              </Text>
            ))}
            {otherResults.map((result, index) => (
              <Text key={index}>
                {result.Variable}: {result.Value}
              </Text>
            ))}
          </View>
        </Page>
      </Document>
    );
  };

  return (
    <PDFDownloadLink document={<VINReport />} fileName={`${slug}-report.pdf`}>
      {({ loading }) =>
        loading ? (
          <button className="bg-neutral-500 font-semibold p-4 border rounded-[50px] text-white">
            Loading...
          </button>
        ) : (
          <button className="bg-neutral-500 font-semibold p-4 border rounded-[50px] text-white">
            Download PDF report
          </button>
        )
      }
    </PDFDownloadLink>
  );
};
