import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CrewMember } from "@/lib/definitions";

type MemberCardProps = {
  crewMember: CrewMember;
  key: number;
};

export default function MemberCard(props: MemberCardProps) {
  return (
    <>
      <div>
        <Card variant="outlined" sx={{ "background-color": "#E5E4E2" }}>
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
