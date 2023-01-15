

export default function useFileUpload() {
    const [file, setFile] = useState<File | null>(null);
    const [fileUrl, setFileUrl] = useState<string | null>(null);

    const handleFileUpload = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                setFile(file);
                setFileUrl(URL.createObjectURL(file));
            }
        },
        []
    );

    return { file, fileUrl, handleFileUpload };
}