import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
    color: "#333",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2 solid #16a34a",
    paddingBottom: 10,
    marginBottom: 20,
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  nameBlock: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
  },
  title: {
    fontSize: 12,
    color: "#555",
  },
  contact: {
    fontSize: 10,
    color: "#555",
  },
  links: {
    fontSize: 10,
    textAlign: "right",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
    textTransform: "uppercase",
    color: "#16a34a",
    borderBottom: "1 solid #16a34a",
    paddingBottom: 4,
  },
  text: {
    marginBottom: 4,
  },
  bullet: {
    marginLeft: 10,
  },
});

// Props Interface
interface ResumeProps {
  photo: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  links: string[];
  summary: string;
  skills: string[];
  experience: {
    title: string;
    company: string;
    period: string;
    bullets: string[];
  }[];
  education: string;
}

export default function ResumePdf({
  photo,
  name,
  title,
  email,
  phone,
  location,
  links,
  summary,
  skills,
  experience,
  education,
}: Readonly<ResumeProps>) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            src={import.meta.env.VITE_DOMAIN + photo}
            style={styles.photo}
          />
          <View style={styles.nameBlock}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.contact}>
              {email} | {phone} | {location}
            </Text>
          </View>
          <View>
            {links.map((link) => (
              <Text style={styles.links} key={link}>
                {link}
              </Text>
            ))}
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text>{summary}</Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {skills.map((skill) => (
            <Text key={skill}>- {skill}</Text>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map(({ title: expTitle, bullets, company, period }) => (
            <View key={expTitle}>
              <Text style={styles.text}>
                {expTitle} — {company}
              </Text>
              <Text style={styles.text}>{period}</Text>
              {bullets.map((b) => (
                <Text key={b} style={styles.bullet}>
                  • {b}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text>{education}</Text>
        </View>
      </Page>
    </Document>
  );
}
