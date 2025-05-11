export default function AppLogo() {
    return (
        <>
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                <img src={`/storage/image/assets/logo-pks-icon.png`} alt="Logo" className="w-8" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none font-semibold">DPD PKS Bulukumba</span>
            </div>
        </>
    );
}
