import React, { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

// third-party
import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';

// project import
import useConfig from 'hooks/useConfig';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';

// chart options
const barChartOptions = {
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: true
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Kathmandu', 'Bhaktapur', 'Lalitpur', 'Dharan', 'Pokhara', 'Butwal', 'Birtmod', 'Butwal', 'Nepalgunj', 'Mahendranagar']
    }
};

// ==============================|| BAR CHART ||============================== //

const ApexBarChart = ({ isLoading }) => {
    const theme = useTheme();
    const { navType } = useConfig();

    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const grey200 = theme.palette.grey[200];

    const successDark = theme.palette.success.dark;

    const [series] = useState([
        {
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
    ]);

    const [options, setOptions] = useState(barChartOptions);

    React.useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: [successDark],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            grid: {
                borderColor: navType === 'dark' ? darkLight + 20 : grey200
            },
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            }
        }));
    }, [navType, primary, darkLight, grey200, successDark]);

    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Typography variant="h2">Branch Report</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <div id="chart">
                                <ReactApexChart options={options} series={series} type="bar" height={350} />
                            </div>
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

ApexBarChart.propTypes = {
    isLoading: PropTypes.bool
};

export default ApexBarChart;
