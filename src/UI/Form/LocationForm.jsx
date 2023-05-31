import { Button, Grid, Input } from '@mantine/core';
const LocationForm = ({ handler }) => {
  return (
    <form action="submit" onSubmit={handler}>
      <Grid>
        <Grid.Col span={8}>
          <Input
            placeholder="Enter a location"
            name="locationSubmit"
            radius="xs"
            size="xl"
          ></Input>
        </Grid.Col>
        <Grid.Col span={4}>
          <Button type="submit" value="Submit" size="xl">
            Submit
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default LocationForm;
