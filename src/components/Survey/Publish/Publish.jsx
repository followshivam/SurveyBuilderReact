import React from 'react'
import { useTranslation } from 'react-i18next';

function Publish() {

    const { t } = useTranslation();
    return (
        <div>
            {t('PUBLISH')}
        </div>
    )
}

export default Publish
