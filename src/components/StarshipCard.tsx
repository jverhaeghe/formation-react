import React from "react";
import { Card, Paragraph, Title } from "react-native-paper";

interface StarshipCardProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

export function StarshipCard({
  name,
  model,
  manufacturer,
  cost_in_credits,
}: StarshipCardProps) {
  return (
    <Card>
      <Card.Title title={name} />
      <Card.Content>
        <Title>{model}</Title>
        <Paragraph>
          {manufacturer} : {cost_in_credits}
        </Paragraph>
      </Card.Content>
    </Card>
  );
}
