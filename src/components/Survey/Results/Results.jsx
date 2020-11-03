import React from 'react'
import { useTranslation } from 'react-i18next';

function Results() {

    const { t } = useTranslation();
    return (
        <div>
            {t('RESULTS')}
        </div>
    )
}

export default Results
