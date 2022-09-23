export const fncAdminID = (req: any) : string => {
    let adminID = ''
    if ( req.session.admin ) {
        const itm = req.session.admin as any
        adminID = itm._id
    }
    return adminID
}