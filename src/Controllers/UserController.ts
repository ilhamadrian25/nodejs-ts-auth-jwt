

export const UserController = async (req: any, res: any) => {
    try {
        const data = [
            {
                id: 1,
                name: "John"
            }
        ]

        return res.status(200).json({
            success: true,
            code: 1,
            data
        })
    } catch (error) {
        
    }
}