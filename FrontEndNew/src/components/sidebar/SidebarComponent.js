import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconSettings,
    IconSubscription,
    IconTickets,
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.dashboard}
                title='Tableau de bord'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.dashboard)}
            />

            <MenuItem
                id={SLUGS.Utilisateurs}
                title='Utilisateurs'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.Utilisateurs)}
            />
            <MenuItem
                id={SLUGS.Vehicules}
                title='Vehicules'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.Vehicules)}
            />

            <MenuItem
                id={SLUGS.Chauffeurs}
                title='Chauffeurs'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.Chauffeurs)}
            />


            <MenuItem
                id={SLUGS.Mecaniciens}
                title='Mecaniciens'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.Mecaniciens)}
            />

            <MenuItem
                id={SLUGS.Missions}
                items={[SLUGS.Missions, SLUGS.Mec]}
                title='Missions'
                icon={IconIdeas}
            >
                <MenuItem
                    id={SLUGS.Missions}
                    title=' Missions Chauffeur'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.Missions)}
                />
                <MenuItem
                    id={SLUGS.Mec}
                    title='Missions Mecaniciens'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.Mec)}
                />
               
            </MenuItem>
            <MenuItem
                id={SLUGS.Pannes}
                title='Pannes'
                icon={IconContacts}
                onClick={() => onClick(SLUGS.Pannes)}
            />
            <MenuItem
                id={SLUGS.Amendes}
                title='Amendes'
                icon={IconAgents}
                onClick={() => onClick(SLUGS.Amendes)}
            />
            <MenuItem
                id={SLUGS.CK}
                items={[SLUGS.CK, SLUGS.RemplirCK]}
                title='CheckList'
                icon={IconArticles}
            />
                <MenuItem
                    id={SLUGS.CK}
                    title='Créer CheckList'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.CK)}
                />
                <MenuItem
                    id={SLUGS.RemplirCK}
                    title='Remplir CheckList'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.RemplirCK)}
                />
                <MenuItem
                    id={SLUGS.AfficherCK}
                    title='Afficher CheckList'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.AfficherCK)}
                />
            <MenuItem
                id={SLUGS.Notifications}
                title='Notifications'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.Notifications)}
            />


            
            <div className={classes.separator}></div>
            <MenuItem
                id={SLUGS.settings}
                title='Settings'
                icon={IconSettings}
                onClick={() => onClick(SLUGS.settings)}
            />

            <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} />
        </Menu>
    );
}

export default SidebarComponent;
