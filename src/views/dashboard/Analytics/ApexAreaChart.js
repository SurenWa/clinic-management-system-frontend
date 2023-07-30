import React, { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

// third-party
import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';

// project imports
import useConfig from 'hooks/useConfig';
import value from 'assets/scss/_themes-vars.module.scss';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';

// chart options
const areaChartOptions = {
    chart: {
        height: 350,
        type: 'area'
    },
    colors: [value.secondaryMain, value.primaryMain],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z'
        ]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        }
    },
    legend: {
        show: true,
        fontFamily: `'Roboto', sans-serif`,
        position: 'bottom',
        offsetX: 10,
        offsetY: 10,
        labels: {
            useSeriesColors: false
        },
        markers: {
            width: 16,
            height: 16,
            radius: 5
        },
        itemMargin: {
            horizontal: 15,
            vertical: 8
        }
    }
};

// ==============================|| AREA CHART ||============================== //

const ApexAreaChart = ({ isLoading }) => {
    const theme = useTheme();
    const { navType } = useConfig();

    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const grey200 = theme.palette.grey[200];

    const [series] = useState([
        {
            name: 'Series 1',
            data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
            name: 'Series 2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }
    ]);

    const [options, setOptions] = useState(areaChartOptions);
    React.useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: [theme.palette.secondary.main, theme.palette.primary.main],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    }
                }
            },
            grid: {
                borderColor: navType === 'dark' ? darkLight + 20 : grey200
            },
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            },
            legend: {
                labels: {
                    colors: 'grey.500'
                }
            }
        }));
    }, [navType, primary, darkLight, grey200, theme]);

    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Typography variant="h2">Appointments</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <div id="chart">
                                <ReactApexChart options={options} series={series} type="area" height={450} />
                            </div>
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

ApexAreaChart.propTypes = {
    isLoading: PropTypes.bool
};

export default ApexAreaChart;
