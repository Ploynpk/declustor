import * as React from 'react'
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ecs from '../assets/ecss.png'
import ecr from '../assets/aws-ecr-cover.png'
import docker from '../assets/docker2.png'
import ws from '../assets/ws.png'


const Cards = () => {
  const theme = useTheme()

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, py: 20 }}>
      <Grid container spacing={3} justifyContent="center">
        {[
          {
            title: 'AWS ECS',
            image: ecr,
            description:
              'Fully managed container orchestration service that helps you easily deploy, manage, and scale containerized applications.',
          },
          {
            title: 'Docker',
            image: docker,
            description:
              'DeClustor is deployed with images to Docker Hub, ensuring seamless deployment and hassle-free environment management, allowing for smooth application execution.',
          },
          {
            title: 'WebSocket',
            image: ws,
            description:
                'Enables real-time updates of dashboards, and real-time notifications.',          
          },
        ].map((card, index) => (
          <Grid item key={index} sx={{ display: 'flex', marginLeft: '65px' }}>
            <Card
              sx={{
                width: 345,
                backgroundColor: theme.palette.primary[400],
                boxShadow: '10px 10px 20px rgba(51, 25, 0, 0.5)',
                borderRadius: '10px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '10px 20px 30px rgba(51, 25, 0, 0.7)',
                },
              }}
            >
              <CardActionArea
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                  //   sx={{ objectFit: 'cover' }} // Ensure images fill the top part
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    sx={{
                      color: theme.palette.primary[700],
                      fontWeight: 'bold',
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ color: theme.palette.primary[600] }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Cards
