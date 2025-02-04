
import React from 'react';
import { Chart, registerables } from 'chart.js';
import Counter from '../Counter/Counter';
import { Grid, Container } from '@mui/material';
import RichTextEditors from '../RichTextEditors/RichTextEditors';
import UserData from '../UserData/UserData'
import UserDataForm from '../UserDataForm/UserDataForm';


Chart.register(...registerables);

const Dashboard = () => {
  const data = {
    labels: ['User 1', 'User 2', 'User 3'],
    datasets: [
      {
        label: 'User Data',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
      },
    ],
  };

  return (
    <Container className='cont' maxWidth="lg">
      <Grid container spacing={4} >
        <Grid item xs={12} md={6}>
          <Counter />
        </Grid>
        <Grid item xs={12} md={6}>
          <RichTextEditors />
        </Grid>
        <Grid item xs={12} md={6}>
          <UserData />
        </Grid>
        <Grid item xs={12} md={6}>
          <UserDataForm />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <div style={{ height: '400px' }}>
            <Bar
              data={data}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div> */}
          </Grid>
      </Grid>
    </Container>
  );
};
export  default Dashboard;