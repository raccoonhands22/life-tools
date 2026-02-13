import { Document, Page, View, Text } from "@react-pdf/renderer";
import { getStyles } from "./shared";

type Props = {
  title: string;
  date: string;
  fontSize: string;
  showPriorities: boolean;
  showSchedule: boolean;
  showNotes: boolean;
};

export default function TodayPDF({ title, date, fontSize, showPriorities, showSchedule, showNotes }: Props) {
  const s = getStyles(fontSize);
  const hours = ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"];

  return (
    <Document>
      <Page size="LETTER" style={s.page}>
        <View style={s.header}>
          <Text style={s.title}>{title || "Today"}</Text>
          {date && <Text style={s.date}>{date}</Text>}
        </View>

        {showPriorities && (
          <View>
            <Text style={s.sectionTitle}>Top 3 Priorities</Text>
            {[1, 2, 3].map((n) => (
              <View key={n} style={s.checkboxRow}>
                <View style={s.checkbox} />
                <View style={{ flex: 1, ...s.line }} />
              </View>
            ))}
          </View>
        )}

        {showSchedule && (
          <View>
            <Text style={s.sectionTitle}>Schedule</Text>
            {hours.map((h) => (
              <View key={h} style={{ flexDirection: "row", alignItems: "flex-end", height: 22, marginBottom: 2 }}>
                <Text style={{ width: 44, fontSize: 8, color: "#666" }}>{h}</Text>
                <View style={{ flex: 1, borderBottomWidth: 0.5, borderBottomColor: "#ccc", height: 22 }} />
              </View>
            ))}
          </View>
        )}

        {showNotes && (
          <View>
            <Text style={s.sectionTitle}>Notes</Text>
            {Array.from({ length: 6 }).map((_, i) => (
              <View key={i} style={s.line} />
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
