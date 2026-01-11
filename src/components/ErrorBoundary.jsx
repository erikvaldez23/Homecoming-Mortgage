import React from 'react';
import { Box, Typography, Button } from '@mui/material';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <Box
                    sx={{
                        height: '100vh',
                        width: '100vw',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#000',
                        color: '#fff',
                        p: 4,
                        textAlign: 'center'
                    }}
                >
                    <Typography variant="h4" gutterBottom sx={{ color: '#ff5252' }}>
                        Something went wrong.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Please report this error to the developer.
                    </Typography>
                    <Box
                        component="pre"
                        sx={{
                            bgcolor: '#1a1a1a',
                            p: 2,
                            borderRadius: 2,
                            overflow: 'auto',
                            maxWidth: '100%',
                            textAlign: 'left',
                            fontSize: '0.8rem',
                            color: '#ff8a80',
                            border: '1px solid #333'
                        }}
                    >
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </Box>
                    <Button
                        variant="contained"
                        sx={{ mt: 4 }}
                        onClick={() => window.location.reload()}
                    >
                        Reload Page
                    </Button>
                </Box>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
