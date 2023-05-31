import { Button, Grid, Input } from '@mantine/core';
const LocationForm = ({ handler }) => {
  return (
    <form action="submit" onSubmit={handler}>
      <Grid>
        <Input
          placeholder="Enter a location"
          name="locationSubmit"
          radius="xs"
          size="xl"
        ></Input>
        <Button type="submit" value="Submit" size="l" compact>
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default LocationForm;
