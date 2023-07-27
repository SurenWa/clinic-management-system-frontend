// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://reactjs.org" target="_blank" underline="hover">
            Clinic Management System Dashboard
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://reactjs.org" target="_blank" underline="hover">
            &copy; techmiracleslab.com
        </Typography>
    </Stack>
);

export default AuthFooter;
