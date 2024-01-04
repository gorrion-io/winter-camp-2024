import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CrewMember } from "@/lib/definitions";

type MemberCardProps = {
  crewMember: CrewMember;
  key: number;
};

export default function MemberCard(props: MemberCardProps) {
  return (
    <>
      <div className="transition duration-150 ease-in-out transform hover:scale-105 mx-3">
        <Card variant="outlined" sx={{ backgroundColor: "#E5E4E2" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {props.crewMember.nationality}
            </Typography>
            <Typography variant="h5" component="div">
              {props.crewMember.fullName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.crewMember.age}
            </Typography>
            <Typography variant="body2">
              {props.crewMember.profession}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
