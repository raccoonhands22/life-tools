import { Document, Page, View, Text } from "@react-pdf/renderer";
import { getStyles } from "./shared";

type Props = {
  title: string;
  date: string;
  startDay: string;
  fontSize: string;
  showGoals: boolean;
};

export default function WeekPDF({ title, date, startDay, fontSize, showGoals }: Props) {
  const s = getStyles(fontSize);
  const mondayDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const sundayDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const days = startDay === "sunday" ? sundayDays : mondayDays;

  return (
    <Document>
      <Page size="LETTER" style={s.page}>
        <View style={s.header}>
          <Text style={s.title}>{title || "This Week"}</Text>
          {date && <Text style={s.date}>Week of {date}</Text>}
        </View>

        {showGoals && (
          <View>
            <Text style={s.sectionTitle}>Weekly Goals</Text>
            {[1, 2, 3].map((n) => (
              <View key={n} style={s.checkboxRow}>
                <View style={s.checkbox} />
                <View style={{ flex: 1, ...s.line }} />
              </View>
            ))}
          </View>
        )}

        <View style={{ marginTop: 8 }}>
          {days.map((day) => (
            <View key={day} style={{ marginBottom: 6 }}>
              <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", marginBottom: 2 }}>{day}</Text>
              <View style={s.line} />
              <View style={s.line} />
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
