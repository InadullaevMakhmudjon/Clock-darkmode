state = {
    sunMode: !!localStorage.getItem('sunMode', 0),
    clickEvend() {
        this.sunMode = !this.sunMode;
        if(this.sunMode) localStorage.setItem('sunMode', 1);
        else localStorage.removeItem('sunMode');
    },
}