import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import { gridSpacing } from 'store/constant';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { BookOnlineOutlined, AccessibleOutlined, CheckCircleOutlined, CurrencyRupeeOutlined } from '@mui/icons-material';
import ApexAreaChart from './ApexAreaChart';
import ApexMixedChart from './ApexMixedChart';
import ApexBarChart from './ApexBarChart';
import ApexPolarChart from './ApexPolarChart';
import ApexPieChart from './ApexPieChart';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard
                            isLoading={isLoading}
                            title="Appointments"
                            monthData="543"
                            yearData="6547"
                            icon={<BookOnlineOutlined fontSize="inherit" />}
                        />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard
                            isLoading={isLoading}
                            title="New Patients"
                            monthData="97"
                            yearData="1111"
                            icon={<AccessibleOutlined fontSize="inherit" />}
                        />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard
                            isLoading={isLoading}
                            title="Check Up Success"
                            monthData="436"
                            yearData="2379"
                            icon={<CheckCircleOutlined fontSize="inherit" />}
                        />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard
                            isLoading={isLoading}
                            title="Total Earnings"
                            monthData="Rs 3lakh"
                            yearData="Rs 15lakh"
                            icon={<CurrencyRupeeOutlined fontSize="inherit" />}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={12}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={12}>
                        <ApexAreaChart />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={6}>
                        <ApexMixedChart />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ApexBarChart />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={6}>
                        <ApexPieChart />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ApexPolarChart isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
