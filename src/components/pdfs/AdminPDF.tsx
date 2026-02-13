import { Document, Page, View, Text } from "@react-pdf/renderer";
import { getStyles } from "./shared";

type Props = {
  title: string;
  date: string;
  fontSize: string;
  showCategories: boolean;
  showNotes: boolean;
};

const CATEGORIES = ["Finance", "Home", "Health", "Work", "Personal"];

export default function AdminPDF({ title, date, fontSize, showCategories, showNotes }: Props) {
  const s = getStyles(fontSize);
  const itemsPerCategory = showCategories ? 4 : 0;
  const plainItems = showCategories ? 0 : 20;

  return (
    <Document>
      <Page size="LETTER" style={s.page}>
        <View style={s.header}>
          <Text style={s.title}>{title || "Admin"}</Text>
          {date && <Text style={s.date}>{date}</Text>}
        </View>

        {showCategories ? (
          CATEGORIES.map((cat) => (
            <View key={cat}>
              <Text style={s.sectionTitle}>{cat}</Text>
              {Array.from({ length: itemsPerCategory }).map((_, i) => (
                <View key={i} style={s.checkboxRow}>
                  <View style={s.checkbox} />
                  <View style={{ flex: 1, ...s.line }} />
                </View>
              ))}
            </View>
          ))
        ) : (
          <View>
            <Text style={s.sectionTitle}>Tasks</Text>
            {Array.from({ length: plainItems }).map((_, i) => (
              <View key={i} style={s.checkboxRow}>
                <View style={s.checkbox} />
                <View style={{ flex: 1, ...s.line }} />
              </View>
            ))}
          </View>
        )}

        {showNotes && (
          <View>
            <Text style={s.sectionTitle}>Notes</Text>
            {Array.from({ length: 4 }).map((_, i) => (
              <View key={i} style={s.line} />
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
