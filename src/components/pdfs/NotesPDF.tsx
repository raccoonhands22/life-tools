import { Document, Page, View, Text } from "@react-pdf/renderer";
import { getStyles } from "./shared";

type Props = {
  title: string;
  date: string;
  lineStyle: string;
  fontSize: string;
};

export default function NotesPDF({ title, date, lineStyle, fontSize }: Props) {
  const s = getStyles(fontSize);
  const lineCount = fontSize === "large" ? 22 : 28;

  return (
    <Document>
      <Page size="LETTER" style={s.page}>
        <View style={s.header}>
          <Text style={s.title}>{title || "Notes"}</Text>
          {date && <Text style={s.date}>{date}</Text>}
        </View>

        {lineStyle === "blank" ? (
          <View style={{ flex: 1 }} />
        ) : (
          Array.from({ length: lineCount }).map((_, i) => (
            <View key={i} style={lineStyle === "dotted" ? s.dottedLine : s.line} />
          ))
        )}
      </Page>
    </Document>
  );
}
