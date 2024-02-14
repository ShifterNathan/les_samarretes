export interface IMobileMenuProps {
    show: boolean;
    setMobileMenuOpen: (show: boolean) => void;
    isAuthenticated: boolean;
    handleLogout: () => void;
}